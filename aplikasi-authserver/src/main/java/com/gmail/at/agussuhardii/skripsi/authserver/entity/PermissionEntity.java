package com.gmail.at.agussuhardii.skripsi.authserver.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Agus Suhardi on 22-Jun-17.
 */
@Entity
@Table(name = "permission")
public class PermissionEntity {

    @Id
    @Column(length = 10)
    private String permission;


    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
