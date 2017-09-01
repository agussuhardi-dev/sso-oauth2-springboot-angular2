package com.gmail.at.agussuhardii.skripsi.api.penjualan.entity;

import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

/**
 * Created by Agus Suhardi on 5/2/2017.
 */
@Entity
@Table(name = "barang")
public class BarangEntity {

    @Id
    @Column(length = 100)
    private String kode;
    @Column(length = 100)
    private String nama;
    private BigDecimal harga;
    private int jumlah;
    @Column(columnDefinition = "text")
    private String keterangan;


    public String getKode() {
        return kode;
    }

    public void setKode(String kode) {
        this.kode = kode;
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

    public int getJumlah() {
        return jumlah;
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }
}
