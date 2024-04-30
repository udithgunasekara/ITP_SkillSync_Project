package BackEnd.repository;

import BackEnd.entity.UserAttempts;
import BackEnd.entity.UserAttemptsPKId;
import BackEnd.entity.UserResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserAttemptsRepository extends JpaRepository<UserAttempts, UserAttemptsPKId> {
    @Query(value = "SELECT * FROM skill_sync.user_attempts WHERE user_name = ? AND exam_id = ?", nativeQuery = true)
    UserAttempts findUserAttemptsByid(String userName, Long examId);

    @Query(value = "UPDATE skill_sync.user_attempts SET no_of_attempts = ? WHERE user_name = ? AND exam_id = ?", nativeQuery = true)
    UserResult updateUserResultByid(String userName, Long examId);
}
