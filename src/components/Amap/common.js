export function getlgla(e) {
  return {
    lg: e.lnglat.getLng(),
    la: e.lnglat.getLat(),
    value: e.lnglat.getLng() + "," + e.lnglat.getLat()
  };
  // console.log(e);
}
