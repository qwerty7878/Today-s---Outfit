if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // 위도와 경도를 사용하여 프롬프트 생성
        var prompt = `{
            "latitude": ${latitude},
            "longitude": ${longitude},
            "prompt": ""
        }`;

        console.log(prompt);
        // 여기서 프롬프트를 사용하거나 서버에 전송하는 작업을 수행
    }, function(error) {
        console.error("Geolocation error: " + error.message);
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}
