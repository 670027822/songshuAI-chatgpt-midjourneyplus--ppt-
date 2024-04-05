import { Injectable, OnModuleInit, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcryptjs';

interface UserInfo {
  username: string;
  password: string;
  status: number;
  email: string;
  sex: number;
  role: string;
}

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private connection: Connection) { }
  async onModuleInit() {
    await this.checkSuperAdmin();
    await this.checkSiteBaseConfig();
  }

  /* 默认创建一个超级管理员账户 */
  async checkSuperAdmin() {
    const user = await this.connection.query(`SELECT * FROM users WHERE role = 'super'`);
    if (!user || user.length === 0) {
      const superPassword = bcrypt.hashSync('123456', 10);
      const adminPassword = bcrypt.hashSync('123456', 10);
      const superEmail = 'default@cooper.com';
      const adminEmail = 'defaultAdmin@cooper.com';
      const superUserinfo = { username: 'super', password: superPassword, status: 1, email: superEmail, sex: 1, role: 'super' };
      const adminUserinfo = { username: 'admin', password: adminPassword, status: 1, email: adminEmail, sex: 1, role: 'admin' };
      await this.createDefaultUser(superUserinfo);
      await this.createDefaultUser(adminUserinfo);
    }
  }

  /* 初始化创建 超级管理员和管理员 */
  async createDefaultUser(userInfo: UserInfo) {
    try {
      const { username, password, status, email, role } = userInfo;
      const user = await this.connection.query(
        `INSERT INTO users (username, password, status, email, role) VALUES ('${username}', '${password}', '${status}', '${email}', '${role}')`,
      );
      const userId = user.insertId;
      const balance = await this.connection.query(`INSERT INTO balance (userId, balance, usesLeft, paintCount) VALUES ('${userId}', 0, 1000, 100)`);
      Logger.log(
        `初始化创建${role}用户成功、用户名为[${username}]、初始密码为[${username === 'super' ? '123456' : '123456'}] ==============> 请注意查阅`,
        'DatabaseService',
      );
    } catch (error) {
      console.log('error: ', error);
      throw new HttpException('创建默认超级管理员失败！', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /* 检测有没有网站基础配置 */
  async checkSiteBaseConfig() {
    const keys = ['siteName', 'qqNumber', 'vxNumber', 'robotAvatar', 'userDefautlAvatar'];
    const result = await this.connection.query(`
  SELECT COUNT(*) AS count FROM config WHERE \`configKey\` IN (${keys.map((k) => `'${k}'`).join(',')})
`);
    const count = parseInt(result[0].count);
    if (count === 0) {
      await this.createBaseSiteConfig();
    }
  }

  /* 创建基础的网站数据 */
  async createBaseSiteConfig() {
    try {
      const code = `
  <script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?cb8c9a3bcadbc200e950b05f9c61a385";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  </script>
`;

      const noticeInfo = `
#### 松鼠Ai 欢迎您
 - 松鼠Ai唯一官方网站 https://1.mylaws.top
 - 松鼠Ai 作者VX： 670027822
 - 松鼠Ai 作者QQ： 670027822
 - 欢迎使用松鼠ai
 - 初始管理员账号密码  super  123456 【前台后台登录都可以修改】
 - 初始预览账号密码  admin  123456 【为后台查看账号 仅可查看部分非敏感数据】
`;

      const defaultConfig = [
        { configKey: 'siteName', configVal: '松鼠 Ai', public: 1, encry: 0 },
        { configKey: 'qqNumber', configVal: '670027822', public: 1, encry: 0 },
        { configKey: 'vxNumber', configVal: '670027822', public: 1, encry: 0 },
        { configKey: 'robotAvatar', configVal: '', public: 1, encry: 0 },
        {
          configKey: 'userDefautlAvatar',
          configVal: 'https://00-1301532507.cos.ap-shanghai.myqcloud.com/ai/1bd2e2f8-5.png',
          public: 0,
          encry: 0,
        },
        { configKey: 'baiduCode', configVal: code, public: 1, encry: 0 },
        { configKey: 'baiduSiteId', configVal: '19024441', public: 0, encry: 0 },
        {
          configKey: 'baiduToken',
          configVal: '121.a1600b9b60910feea2ef627ea9776a6f.YGP_CWCOA2lNcIGJ27BwXGxa6nZhBQyLUS4XVaD.TWt9TA',
          public: 0,
          encry: 0,
        },
        { configKey: 'buyCramiAddress', configVal: '', public: 1, encry: 0 },
        { configKey: 'openaiBaseUrl', configVal: 'https://api.openai.com', public: 0, encry: 0 },
        { configKey: 'noticeInfo', configVal: noticeInfo, public: 1, encry: 0 },

        { configKey: 'registerVerifyEmailTitle', configVal: '松鼠AI Team团队账号验证', public: 0, encry: 0 },
        {
          configKey: 'registerVerifyEmailDesc',
          configVal: '欢迎使用松鼠AI Team团队的产品服务,请在五分钟内完成你的账号激活,点击以下按钮激活您的账号，',
          public: 0,
          encry: 0,
        },
        { configKey: 'registerVerifyEmailFrom', configVal: '松鼠AI Team团队', public: 0, encry: 0 },
        { configKey: 'registerVerifyExpir', configVal: '1800', public: 0, encry: 0 },
        { configKey: 'registerSuccessEmailTitle', configVal: '松鼠AI Team团队账号激活成功', public: 0, encry: 0 },
        { configKey: 'registerSuccessEmailTeamName', configVal: '松鼠AI Team团队', public: 0, encry: 0 },
        {
          configKey: 'registerSuccessEmaileAppend',
          configVal: ',请妥善保管您的账号，我们将为您赠送50次对话额度和5次绘画额度、祝您使用愉快',
          public: 0,
          encry: 0,
        },
        { configKey: 'registerFailEmailTitle', configVal: '松鼠AI Team账号激活失败', public: 0, encry: 0 },
        { configKey: 'registerFailEmailTeamName', configVal: '松鼠AI Team团队', public: 0, encry: 0 },
        /* 注册默认设置 */
        { configKey: 'registerSendStatus', configVal: '1', public: 1, encry: 0 },
        { configKey: 'registerSendModel3Count', configVal: '30', public: 1, encry: 0 },
        { configKey: 'registerSendModel4Count', configVal: '3', public: 1, encry: 0 },
        { configKey: 'registerSendDrawMjCount', configVal: '3', public: 1, encry: 0 },
        { configKey: 'firstRegisterSendStatus', configVal: '1', public: 1, encry: 0 },
        { configKey: 'firstRegisterSendRank', configVal: '500', public: 1, encry: 0 },
        { configKey: 'firstRregisterSendModel3Count', configVal: '20', public: 1, encry: 0 },
        { configKey: 'firstRregisterSendModel4Count', configVal: '2', public: 1, encry: 0 },
        { configKey: 'firstRregisterSendDrawMjCount', configVal: '3', public: 1, encry: 0 },
        { configKey: 'inviteSendStatus', configVal: '1', public: 1, encry: 0 },
        { configKey: 'inviteGiveSendModel3Count', configVal: '30', public: 1, encry: 0 },
        { configKey: 'inviteGiveSendModel4Count', configVal: '3', public: 1, encry: 0 },
        { configKey: 'inviteGiveSendDrawMjCount', configVal: '1', public: 1, encry: 0 },
        { configKey: 'invitedGuestSendModel3Count', configVal: '10', public: 1, encry: 0 },
        { configKey: 'invitedGuestSendModel4Count', configVal: '1', public: 1, encry: 0 },
        { configKey: 'invitedGuestSendDrawMjCount', configVal: '1', public: 1, encry: 0 },
        { configKey: 'isVerifyEmail', configVal: '1', public: 1, encry: 0 },
        { configKey: 'liudonggg', configVal: '如遇网站出错，烦请反馈至客服。', public: 1, encry: 0 },
        { configKey: 'morenzhuti', configVal: 'dark', public: 1, encry: 0 },
        { configKey: 'huihuaegxs', configVal: '0', public: 1, encry: 0 },
      ];

      const res = await this.connection.query(
        `INSERT INTO config (configKey, configVal, public, encry) VALUES ${defaultConfig
          .map((d) => `('${d.configKey}', '${d.configVal.replace(/'/g, "\\'")}', '${d.public}', '${d.encry}')`)
          .join(', ')}`,
      );
      Logger.log(`初始化网站配置信息成功、如您需要修改网站配置信息，请前往管理系统系统配置设置 ==============> 请注意查阅`, 'DatabaseService');
    } catch (error) {
      console.log('error: ', error);
      throw new HttpException('创建默认网站配置失败！', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
