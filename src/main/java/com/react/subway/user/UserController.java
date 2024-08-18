package com.react.subway.user;

import com.react.subway.entity.User;
import com.react.subway.user.dto.UserLoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginRequest request) {
        boolean isValidUser = userService.checkUserCredentials(request.getUserEmail(), request.getUserPassword());

        if (isValidUser) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @PostMapping("/emailCheck")
    public ResponseEntity<String> emailCheck(@RequestBody UserLoginRequest request) {
        boolean isValidUser = userService.checkUserCredentials(request.getUserEmail());

        if (isValidUser) {
            return ResponseEntity.ok("Email duplication");
        } else {
            return ResponseEntity.status(401).body("Invalid email");
        }
    }

    @PostMapping("/memberSave")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PostMapping("/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestBody KakaoRequest request) {
        String accessToken = request.getAccessToken();

        String url = "https://kapi.kakao.com/v2/user/me";
        RestTemplate restTemplate = new RestTemplate();

        // 헤더에 액세스 토큰을 추가하여 사용자 정보 요청
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        // 사용자 정보 처리
        String userInfo = response.getBody();
        return ResponseEntity.ok(userInfo);
    }
}
