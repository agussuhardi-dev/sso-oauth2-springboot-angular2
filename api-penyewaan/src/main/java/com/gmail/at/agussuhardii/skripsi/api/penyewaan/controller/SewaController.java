package com.gmail.at.agussuhardii.skripsi.api.penyewaan.controller;

import com.gmail.at.agussuhardii.skripsi.api.penyewaan.dao.SewaDao;
import com.gmail.at.agussuhardii.skripsi.api.penyewaan.entity.SewaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;

/**
 * Created by Agus Suhardi on 5/2/2017.
 */
@RestController
@RequestMapping("/penyewaan/api/sewa")
public class SewaController {

    @Autowired private SewaDao sewaDao;

    @PreAuthorize("hasAnyAuthority('USER_VIEW')")
    @GetMapping("/")
    public Page<SewaEntity> getAll(Pageable pageable){
        return sewaDao.findAll(pageable);
    }

    @PreAuthorize("hasAnyAuthority('USER_EDIT')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void userBaru(@RequestBody @Valid SewaEntity data) {
        data.setWaktu(new Date());
        sewaDao.save(data);
    }

    @PreAuthorize("hasAnyAuthority('USER_EDIT')")
    @PostMapping("/delete")
    @ResponseStatus(HttpStatus.CREATED)
    public void delete(@RequestBody String id){
        sewaDao.delete(id);
    }






}
