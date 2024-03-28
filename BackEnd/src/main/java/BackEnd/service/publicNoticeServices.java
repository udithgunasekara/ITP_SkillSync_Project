package BackEnd.service;
import java.util.List;
import BackEnd.DTO.publicNoticesDTO;

public interface publicNoticeServices {

    List<publicNoticesDTO> getAllNotices();

    publicNoticesDTO addNotice(publicNoticesDTO publicNoticesDTO);

    publicNoticesDTO findNoticeByID(Long id);

    publicNoticesDTO updateNoticeByID(publicNoticesDTO updateinfo, Long id);

    String deleteNoticeById(Long id);

    String deleteAllNotices();

    List<publicNoticesDTO> getNoticeByAudience(String audience);

}
