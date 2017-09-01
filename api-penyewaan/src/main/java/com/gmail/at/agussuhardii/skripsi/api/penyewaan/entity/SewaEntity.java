package com.gmail.at.agussuhardii.skripsi.api.penyewaan.entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Agus Suhardi on 5/2/2017.
 */
@Entity
@Table(name = "sewa")
public class SewaEntity {

    @Id
//    @Transient
//    private UUID id = UUID.randomUUID();

    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(length = 100)
    private String id;
    @Column(length = 100)
    private String nama;
    @Column(length = 50)
    private String jenis;
    private BigDecimal harga;
    private Date waktu;
    @Column(columnDefinition = "text")
    private String keterangan;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJenis() {
        return jenis;
    }

    public void setJenis(String jenis) {
        this.jenis = jenis;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public BigDecimal getHarga() {
        return harga;
    }

    public void setHarga(BigDecimal harga) {
        this.harga = harga;
    }

    public Date getWaktu() {
        return waktu;
    }

    public void setWaktu(Date waktu) {
        this.waktu = waktu;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }
}
