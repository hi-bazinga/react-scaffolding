export default class Utils {
  static timestampFormatter(time) {
    return time ? new Date(time).toISOString().replace(/z|t/gi,' ').trim().substr(0, 19) + ' UTC' : '';
  }
}
