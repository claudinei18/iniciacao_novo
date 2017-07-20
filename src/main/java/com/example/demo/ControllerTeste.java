package com.example.demo;

import jdk.nashorn.internal.parser.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Created by claudinei on 05/06/17.
 */
@Controller
@RequestMapping("/rest")
public class ControllerTeste {



    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = "text/plain")
    @ResponseBody
    public String search(@RequestBody String search) {
        String[] aux = search.split("=");
        String aux2 = aux[1];
        String[] aux3 = aux2.split("%20");
        String aux4 = aux3[aux3.length - 1];
        String[] aux5 = aux4.split("&");
        String aux6 = aux5[0];

        String auxFinal = "";
        for(int i = 0; i < aux3.length - 1; i++){
            auxFinal += aux3[i] + " ";
        }
        auxFinal += aux6;
        auxFinal = auxFinal.toLowerCase();

        BM25.writeLog(auxFinal + " " + new Date().toString());

        JSONArray array = new JSONArray();

        DTO dto = BM25.BM25(auxFinal);


        System.out.println("DbPedia");
        System.out.println(dto.getDbPedia());
        System.out.println("Links");
        System.out.println(dto.getLinks());


        JSONObject obj = new JSONObject();
        obj.put("dbPedia", dto.getDbPedia().get("dbPedia"));
        obj.put("link", dto.getDbPedia().get("link"));

        array.put(obj);

        List<DTOItem> list = dto.getListPaginas();

        for(int i = 0; i < dto.getListPaginas().size(); i++){
            obj = new JSONObject();
            obj.put("titulo", list.get(i).getTitulo());
            obj.put("link", list.get(i).getLink());
            obj.put("snippet", list.get(i).getSnippet());
            obj.put("pesoBM25", list.get(i).getPesoBM25());
            obj.put("pesoWat", list.get(i).getPesoWatson());
            obj.put("data", list.get(i).getData());
            array.put(obj);
            System.out.println(obj);
        }

        System.out.println(array.toString());
        return array.toString();
    }


}
