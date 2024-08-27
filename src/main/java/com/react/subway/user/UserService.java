package com.react.subway.user;

import ch.qos.logback.core.boolex.Matcher;
import com.react.subway.entity.User;
import com.react.subway.entity.VerificationToken;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TokenRepository tokenRepository;

    public UserService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public boolean checkUserCredentials(String userEmail, String userPassword) {
        Matcher passwordEncoder;
        return userRepository.findByUserEmail(userEmail)
                .map(user -> user.getUserPassword().equals(userPassword))
                .orElse(false);
    }

    public boolean checkUserCredentials(String userEmail) {
        Matcher passwordEncoder;
        return userRepository.findByUserEmail(userEmail).isPresent();
    }

    public boolean getVerificationToken(String token) {
        return tokenRepository.findByToken(token)
                .map(verificationToken -> verificationToken.getToken().equals(token))
                .orElse(false);
    }

    public void deleteVerificationToken(String token) {
        tokenRepository.deleteByToken(token);
    }


    public void sendVerificationEmail(String email) throws MessagingException {
        String token = UUID.randomUUID().toString(); // 인증 토큰 생성

        // 인증 링크 생성
        String verificationLink = "http://localhost:3000/users/membershipstep02?token=" + token;

        // 토큰 엔티티 생성
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setEmail(email);
        verificationToken.setExpiryDate(LocalDateTime.now().plusHours(24)); // 유효기간 24시간 설정

        // 토큰 엔티티 저장
        tokenRepository.save(verificationToken);

        String emailContent = "<p>이메일 인증을 위해 아래 링크를 클릭하세요:</p>" +
                "<a href=\"" + verificationLink + "\">" + verificationLink + "</a>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(email);
        helper.setSubject("이메일 인증");
        helper.setText(emailContent, true);

        mailSender.send(message);
    }
}
