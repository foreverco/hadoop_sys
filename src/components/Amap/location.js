export function adressSetMapCenter(address, map) {
  console.log(address);
  const geocoder = new AMap.Geocoder();
  geocoder.getLocation(address, function(status, result) {
    console.log(result);
    if (status === "complete" && result.info === "OK") {
      let la = result.geocodes[0].location.lat;
      let lg = result.geocodes[0].location.lng;
      map.panTo([lg, la]); //设置地图中心点
      // map.setCenter([lg, la]); //设置地图中心点
    } else {
      // log.error("根据地址查询位置失败");
    }
  });
}
