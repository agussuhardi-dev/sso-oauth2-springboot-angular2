package com.gmail.at.agussuhardii.skripsi.authserver.entity;

import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Agus Suhardi on 22-Jun-17.
 */
@Entity
@Table(name = "user")
public class UserEntity {

    @Id
    @Column(length = 20)
    private String username;
    private String password;

//    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "list_access",
            joinColumns = @JoinColumn(name = "username"),
            inverseJoinColumns = @JoinColumn(name = "permission")
    )
    private List<PermissionEntity> permission = new ArrayList<>();
    private boolean enabled;
    @Column(length = 100)
    private String fullname;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<PermissionEntity> getPermission() {
        return permission;
    }

    public void setPermission(List<PermissionEntity> permission) {
        this.permission = permission;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}