package com.gmail.at.agussuhardii.skripsi.api.penjualan.config;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;


/**
 * Created by Agus Suhardi on 5/1/2017.
 */
@EnableWebSecurity(debug = true)
@EnableGlobalMethodSecurity(prePostEnabled = true)//proteksi metohde
@EnableResourceServer
public class SecurityConfig extends ResourceServerConfigurerAdapter {

//    aktivkan proteksi
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
//                .authorizeRequests().anyRequest().authenticated();
                .authorizeRequests().antMatchers("/penjualan/api/barang/").permitAll()
                .and().authorizeRequests().anyRequest().authenticated();
    }
}
