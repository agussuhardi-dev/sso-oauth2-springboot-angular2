package com.gmail.at.agussuhardii.skripsi.authserver.controller;

import com.gmail.at.agussuhardii.skripsi.authserver.dao.PermissionDao;
import com.gmail.at.agussuhardii.skripsi.authserver.dao.UserDao;
import com.gmail.at.agussuhardii.skripsi.authserver.entity.PermissionEntity;
import com.gmail.at.agussuhardii.skripsi.authserver.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Agus Suhardi on 22-Jun-17.
 */
@RestController
@RequestMapping("/oauth/api")
public class UserController {

    @Autowired
    private UserDao userDao;
    @Autowired
    private PermissionDao permissionDao;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping("/public/")
    public Page<UserEntity> user(
            Pageable pageable,
            @RequestParam String username
    ) {
        return  userDao.findByUserName(username, pageable);
    }

    @GetMapping("/public/all")
    public Page<UserEntity> userall(
            Pageable pageable
    ) {
        return  userDao.findAll(pageable);
    }

    @GetMapping("/public/user/")
    @ResponseStatus(HttpStatus.CREATED)
    public void userBaru(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String permission,
            @RequestParam String fullname

    ) {
        UserEntity u = new UserEntity();

        if (permission.equals("admin")) {
            u.getPermission().add(permissionDao.findOne("USER_EDIT"));
            u.getPermission().add(permissionDao.findOne("USER_VIEW"));
        } else if (permission.equals("user")) {
            u.getPermission().add(permissionDao.findOne("USER_VIEW"));
        }

        u.setUsername(username);
        u.setPassword(passwordEncoder.encode(password));
        u.setEnabled(true);
        u.setFullname(fullname);
        userDao.save(u);
    }
}
