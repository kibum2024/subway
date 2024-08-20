package com.react.subway.menu;

import com.react.subway.entity.Kindarticle;
import com.react.subway.entity.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class KindarticleController {

    @Autowired
    private KindarticleService kindarticleService;

    @GetMapping("/kinds")
    public List<Kindarticle> getKinds() {
        return kindarticleService.getKindarticleBykindCode();
    }
}
