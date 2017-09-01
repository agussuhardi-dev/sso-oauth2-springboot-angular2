package com.gmail.at.agussuhardii.skripsi.authserver.dao;

import com.gmail.at.agussuhardii.skripsi.authserver.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by Agus Suhardi on 22-Jun-17.
 */
public interface UserDao extends PagingAndSortingRepository<UserEntity, String> {

    @Query(
            "select u.permission from UserEntity u where u.username= :userName"
    )
    Page<UserEntity> findByUserName(
            @Param("userName") String userName,
            Pageable pageable
            );

}
