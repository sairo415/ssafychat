package com.ssafychat.domain.mentoring.repository;

import com.ssafychat.domain.mentoring.model.Mentoring;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentoringRepository extends JpaRepository<Mentoring, Integer> {

    List<Mentoring> findAll(Sort sort);

    List<Mentoring> findByMentor_UserId(int userId);
}
