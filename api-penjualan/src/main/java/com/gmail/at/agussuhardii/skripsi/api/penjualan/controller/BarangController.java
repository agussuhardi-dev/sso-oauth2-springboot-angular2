package com.gmail.at.agussuhardii.skripsi.api.penjualan.controller;

import com.gmail.at.agussuhardii.skripsi.api.penjualan.dao.BarangDao;
import com.gmail.at.agussuhardii.skripsi.api.penjualan.entity.BarangEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Agus Suhardi on 5/2/2017.
 */
@RestController
@RequestMapping("penjualan/api/barang")
public class BarangController {

    @Autowired
    private BarangDao barangDao;

    //    @PreAuthorize("hasAnyAuthority('USER_VIEW')")
    @GetMapping("/")
    public Page<BarangEntity> getAll(Pageable pageable) {
        return barangDao.findAll(pageable);
    }

    @PreAuthorize("hasAnyAuthority('USER_EDIT')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void userBaru(@RequestBody @Valid BarangEntity data) {
        barangDao.save(data);
    }

    @PreAuthorize("hasAnyAuthority('USER_EDIT')")
    @PostMapping("delete")
    @ResponseStatus(HttpStatus.CREATED)
    public void delete(@RequestBody String kode) {
        barangDao.delete(kode);
    }
}
