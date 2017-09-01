package com.gmail.at.agussuhardii.skripsi.authserver.dao;

import com.gmail.at.agussuhardii.skripsi.authserver.entity.PermissionEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Agus Suhardi on 22-Jun-17.
 */
public interface PermissionDao extends PagingAndSortingRepository<PermissionEntity, String>{
}
