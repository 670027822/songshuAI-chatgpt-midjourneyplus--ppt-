/**
 * 任务状态枚举 1: 等待中 2: 绘制中 3: 绘制完成 4: 绘制失败 5: 绘制超时
 */
export enum MidjourneyStatusEnum {
  WAITING = 1,
  DRAWING = 2,
  DRAWED = 3,
  DRAWFAIL = 4,
  DRAWTIMEOUT = 5,
}

/**
 * 绘画动作枚举 1: 绘画 2: 放大 3: 变换 4: 图生图 5: 重新生成 6/9： 缩放  7/8: 单张变化【很大|微小】 10-13,定向阔图，15：局部重绘
 */
export enum MidjourneyActionEnum {
  DRAW = 1,
  UPSCALE = 2,
  VARIATION = 3,
  GENERATE = 4,
  REGENERATE = 5,
  ZOOM15 = 6,
  VarySubtle = 7,
  VaryStrong = 8,
  ZOOM20 = 9,
  panz = 10,
  pany = 11,
  pans = 12,
  panx = 13,
  chongh=15
}
