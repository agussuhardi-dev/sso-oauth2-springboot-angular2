package com.gmail.at.agussuhardii.skripsi.authserver.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.security.KeyPair;

/**
 * Created by Agus Suhardi on 5/1/2017.
 */
@Configuration
@EnableAuthorizationServer
public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {

    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;

    @Autowired
    @Qualifier("userDetailsServiceBean")
    private UserDetailsService userDetailsService;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("aplikasiweb")
                .authorities("APLIKASI_CLIENT_OAUTH2")
                .secret("aplikasi123")
                .authorizedGrantTypes("authorization_code", "refresh_token")
                .scopes("modul-pertama", "modul-kedua")
                .accessTokenValiditySeconds(180)
                .and()
                .withClient("aplikasijs")
                .authorities("APLIKASI_CLIENT_OAUTH2")
                .secret("aplikasi123")
                .authorizedGrantTypes("password")
                .scopes("modul-pertama", "modul-kedua")
                .autoApprove(true);
    }

    @Override
    @CrossOrigin
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.checkTokenAccess("hasAuthority('APLIKASI_CLIENT_OAUTH2')")
                .tokenKeyAccess("permitAll()");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
                .accessTokenConverter(jwtTokenConverter())
                .authenticationManager(authenticationManager).userDetailsService(userDetailsService);
    }

    @Bean
    public JwtAccessTokenConverter jwtTokenConverter(){
        JwtAccessTokenConverter conv = new JwtAccessTokenConverter();
        KeyPair keyPair = new KeyStoreKeyFactory(
                new ClassPathResource("skripsi.jks"), //tempat dan nama file
                "agussuhardi".toCharArray() //password
        ).getKeyPair("skripsi"); //alias dari key

        conv.setKeyPair(keyPair);
        return conv;
    }
}
