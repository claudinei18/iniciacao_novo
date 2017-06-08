package com.example.demo;

import java.util.HashMap;
import java.util.List;

/**
 * Created by claudinei on 06/06/17.
 */
public class DTO {
    HashMap<String, Double> links;
    HashMap<String, String> dbPedia;
    List<DTOItem> listPaginas;

    public DTO(HashMap<String, Double> links, HashMap<String, String> dbPedia, List<DTOItem> listPaginas){
        this.links = links;
        this.dbPedia = dbPedia;
        this.listPaginas = listPaginas;
    }

    public HashMap<String, Double> getLinks() {
        return links;
    }

    public HashMap<String, String> getDbPedia() {
        return dbPedia;
    }

    public List<DTOItem> getListPaginas() {
        return listPaginas;
    }
}
