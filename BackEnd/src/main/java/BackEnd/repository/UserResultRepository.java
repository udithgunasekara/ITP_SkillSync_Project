package BackEnd.repository;

import BackEnd.entity.UserResult;
import BackEnd.entity.UserResultPKId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserResultRepository extends JpaRepository<UserResult, UserResultPKId> {

    @Query(value = "SELECT * FROM skill_sync.user_result WHERE user_name_pk = ? AND exam_id_pk = ?", nativeQuery = true)
    UserResult findUserResultByid(String userName, Long examId);
}
