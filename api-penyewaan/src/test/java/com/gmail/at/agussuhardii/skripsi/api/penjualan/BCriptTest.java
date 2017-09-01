package com.gmail.at.agussuhardii.skripsi.api.penjualan;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Agus Suhardi on 5/1/2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class BCriptTest {

    @Test
    public void testBacrip(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hasil = encoder.encode("suhardi");
        System.out.println(": "+hasil);
    }
}
