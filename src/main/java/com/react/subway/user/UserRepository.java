package com.react.subway.user;

import com.react.subway.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail); // 메소드 이름 필드 이름에 맞게 변경
}
