package com.ssafychat.domain.mentoring.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;


@Data
@Builder
public class ApplyMentoringViewDto {

    private int applyMentoringId;
    private int menteeUid;
    private String job;
    private String company;
    private List<Date> times;
}
