package com.react.subway.menu;

import com.react.subway.entity.Kindarticle;
import com.react.subway.entity.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KindarticleService {

    @Autowired
    private KindarticleRepository kindarticleRepository;

    public List<Kindarticle> getKindarticleBykindCode() {
        return kindarticleRepository.findKindarticleBykindCode();
    }
}
