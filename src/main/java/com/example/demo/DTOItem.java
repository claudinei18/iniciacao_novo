package com.example.demo;

/**
 * Created by claudinei on 07/06/17.
 */
public class DTOItem {
    String titulo;
    String link;
    String snippet;
    String pesoBM25;
    String pesoWatson;
    String data;

    public DTOItem(String titulo, String link, String snippet, String pesoBM25, String pesoWatson, String data) {
        this.titulo = titulo;
        this.link = link;
        this.snippet = snippet;
        this.pesoBM25 = pesoBM25;
        this.pesoWatson = pesoWatson;
        this.data = data;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getLink() {
        return link;
    }

    public String getSnippet() {
        return snippet;
    }

    public String getPesoBM25() {
        return pesoBM25;
    }

    public String getPesoWatson() {
        return pesoWatson;
    }

    public String getData() {
        return data;
    }

    public void setPesoBM25(String pesoBM25) {
        this.pesoBM25 = pesoBM25;
    }

    public void setPesoWatson(String pesoWatson) {
        this.pesoWatson = pesoWatson;
    }
}
