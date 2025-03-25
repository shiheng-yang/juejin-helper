const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  /* 6653 undefined1234*/
  COOKIE: '__tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227376819242085910031%2522%252C%2522user_unique_id%2522%253A%25227376819242085910031%2522%252C%2522timestamp%2522%253A1717549596276%257D; store-region=cn-js; store-region-src=uid; passport_csrf_token=561e6240c2f7666ee2e45aa592e4900d; passport_csrf_token_default=561e6240c2f7666ee2e45aa592e4900d; _tea_utm_cache_2608={%22utm_campaign%22:%22liebian_invite%22}; _tea_utm_cache_2018={%22utm_campaign%22:%22liebian_invite%22}; n_mh=JH7bo6YchjHfkAFWg2LCNfVRDcKlCCkaEnFcpiUrd0c; sid_guard=4f915d6c8eaa7733c8f54e846687fad0%7C1742777434%7C31536000%7CTue%2C+24-Mar-2026+00%3A50%3A34+GMT; uid_tt=d5f3b167f9f5888a835767716e999da9; uid_tt_ss=d5f3b167f9f5888a835767716e999da9; sid_tt=4f915d6c8eaa7733c8f54e846687fad0; sessionid=4f915d6c8eaa7733c8f54e846687fad0; sessionid_ss=4f915d6c8eaa7733c8f54e846687fad0; is_staff_user=false; sid_ucp_v1=1.0.0-KGFmMTAxZGIzODM2YjgzNmM5ZjllNDhkMTIwMzhkYWI1NjllOTYyYTIKFwj6_LD1hM2WAhDa2IK_BhiwFDgHQPQHGgJsZiIgNGY5MTVkNmM4ZWFhNzczM2M4ZjU0ZTg0NjY4N2ZhZDA; ssid_ucp_v1=1.0.0-KGFmMTAxZGIzODM2YjgzNmM5ZjllNDhkMTIwMzhkYWI1NjllOTYyYTIKFwj6_LD1hM2WAhDa2IK_BhiwFDgHQPQHGgJsZiIgNGY5MTVkNmM4ZWFhNzczM2M4ZjU0ZTg0NjY4N2ZhZDA; csrf_session_id=c76c5989f3f94623d078be72db5e9ab4',
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  /* 8783 大*/
  COOKIE_3: 'store-region=cn-js; store-region-src=uid; sid_guard=38a545cebc16e99217e67b265c90f699%7C1717550212%7C31536000%7CThu%2C+05-Jun-2025+01%3A16%3A52+GMT; uid_tt=a11150e21fd3093c1b5635980c12e9df; uid_tt_ss=a11150e21fd3093c1b5635980c12e9df; sid_tt=38a545cebc16e99217e67b265c90f699; sessionid=38a545cebc16e99217e67b265c90f699; sessionid_ss=38a545cebc16e99217e67b265c90f699; sid_ucp_v1=1.0.0-KGY3NGNlNzZmNTRmMmNlMzc4YzAzMmIyNjA3NjlhNWU2NGRkNjQwZTcKFwju77DUuoyVBBCE-f6yBhiwFDgHQPQHGgJscSIgMzhhNTQ1Y2ViYzE2ZTk5MjE3ZTY3YjI2NWM5MGY2OTk; ssid_ucp_v1=1.0.0-KGY3NGNlNzZmNTRmMmNlMzc4YzAzMmIyNjA3NjlhNWU2NGRkNjQwZTcKFwju77DUuoyVBBCE-f6yBhiwFDgHQPQHGgJscSIgMzhhNTQ1Y2ViYzE2ZTk5MjE3ZTY3YjI2NWM5MGY2OTk; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25226979823742491395614%2522%252C%2522web_id%2522%253A%25226979823742491395614%2522%252C%2522timestamp%2522%253A1734080810525%257D; csrf_session_id=c76d755d8c709ce34413722da5799704; passport_csrf_token=d146270acfe89897f19d4995d8e4de00; passport_csrf_token_default=d146270acfe89897f19d4995d8e4de00; _tea_utm_cache_2608={%22utm_source%22:%22juejin%22%2C%22utm_medium%22:%22juejin_trae%22%2C%22utm_campaign%22:%22sys%22}; _tea_utm_cache_2018={%22utm_source%22:%22juejin%22%2C%22utm_medium%22:%22juejin_trae%22%2C%22utm_campaign%22:%22sys%22}',
  /* 3797 yang*/
  COOKIE_2: '_tea_utm_cache_2608={%22utm_campaign%22:%22liebian_invite%22}; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227377186442160014902%2522%252C%2522user_unique_id%2522%253A%25227377186442160014902%2522%252C%2522timestamp%2522%253A1717635092175%257D; sid_guard=7ba57e79eb817add7a2081af5729c1cc%7C1733208109%7C31536000%7CWed%2C+03-Dec-2025+06%3A41%3A49+GMT; uid_tt=ba211ef0dd9b920829438c37ca9c2047; uid_tt_ss=ba211ef0dd9b920829438c37ca9c2047; sid_tt=7ba57e79eb817add7a2081af5729c1cc; sessionid=7ba57e79eb817add7a2081af5729c1cc; sessionid_ss=7ba57e79eb817add7a2081af5729c1cc; sid_ucp_v1=1.0.0-KDMyZGVkOWNlOTcxZmViMzlkNmE2ZjE4MDc3M2IzNzk0Zjc5ZDhlMzIKFgi-veDFvIx1EK3QuroGGLAUOAdA9AcaAmxmIiA3YmE1N2U3OWViODE3YWRkN2EyMDgxYWY1NzI5YzFjYw; ssid_ucp_v1=1.0.0-KDMyZGVkOWNlOTcxZmViMzlkNmE2ZjE4MDc3M2IzNzk0Zjc5ZDhlMzIKFgi-veDFvIx1EK3QuroGGLAUOAdA9AcaAmxmIiA3YmE1N2U3OWViODE3YWRkN2EyMDgxYWY1NzI5YzFjYw; store-region=cn-js; store-region-src=uid; _tea_utm_cache_2018={%22utm_campaign%22:%22liebian_invite%22}; is_staff_user=false; n_mh=wzqvH3nLFSRF0FTPZ5ZTGxDV6gFlpPGTmrjNGQhWnEk; passport_csrf_token=583f16bd105eda56f3d8b56f33c13f3a; passport_csrf_token_default=583f16bd105eda56f3d8b56f33c13f3a; csrf_session_id=3a6045fec41e62fed8c1e7b5d1ed37fb',
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: '418252769@qq.com',
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: 'https://oapi.dingtalk.com/robot/send?access_token=50797c8f93cd4e8067faf35deb4293c640ebb983054880c953c85123dc9649fd',
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
  /**
   * server酱推送key
   * https://sct.ftqq.com/sendkey
   */
  SERVERPUSHKEY: env.SERVERPUSHKEY,
  /**
   * 飞书配置
   */
  FEISHU_WEBHOOK: env.FEISHU_WEBHOOK
};
