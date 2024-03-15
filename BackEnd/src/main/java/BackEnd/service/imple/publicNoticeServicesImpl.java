package BackEnd.service.imple;

import BackEnd.DTO.publicNoticesDTO;
import BackEnd.entity.publicNotices;
import BackEnd.repository.publicNotcesRepo;
import BackEnd.service.publicNoticeServices;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class publicNoticeServicesImpl implements publicNoticeServices{
    private publicNotcesRepo publicNoticesRepo;
    private ModelMapper modelmapper;

    @Override
    public List<publicNoticesDTO> getAllNotices() {
        List<publicNotices> noticeslist = publicNoticesRepo.findAll();
        if (!noticeslist.isEmpty()){
            System.out.println(noticeslist.get(0).getId());
        }
        List<publicNoticesDTO> noticesDTOlist = new ArrayList<>();
        noticeslist.forEach(
                (p) -> {
                    noticesDTOlist.add(modelmapper.map(p,publicNoticesDTO.class));
                }
        );

        return noticesDTOlist;
    }
}
