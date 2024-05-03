package BackEnd.service;

import BackEnd.DTO.UserResultDTO;

import java.util.List;

public interface UserResultService {

    UserResultDTO saveUSerResult(UserResultDTO userResultDTO);

    List<UserResultDTO> getSavedResultByExamId();

    UserResultDTO getSavedResultById(String userName, Long examId);
}
