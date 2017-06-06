package com.example.demo;

import jdk.nashorn.internal.parser.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * Created by claudinei on 05/06/17.
 */
@Controller
@RequestMapping("/rest")
public class ControllerTeste {

    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = "text/plain")
    @ResponseBody
    public String branchBound(@RequestBody String search) {
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

        System.out.println(search);
        System.out.println(auxFinal);
        System.out.println(BM25.getFileName(auxFinal));
        System.out.println(BM25.getFileName("barack"));
        JSONArray array = new JSONArray();
        JSONObject jsonObj = new JSONObject("{teste: teste2}");
        array = new JSONArray("[\n" +
                "{\n" +
                "\"ope\": \"1\"\n" +
                "},\n" +
                "\n" +
                "{\n" +
                "\"ope\": \"3\"\n" +
                "},\n" +
                "{\n" +
                "\"ope\": \"4\"\n" +
                "},\n" +
                "{\n" +
                "\"ope\": \"3\"\n" +
                "}\n" +
                "]");


        HashMap<String, Double> hash = BM25.BM25(auxFinal);
        System.out.println(hash);

        System.out.println(jsonObj);
        //array.put(jsonObj);
        System.out.println(array);

        System.out.println(BM25.teste(auxFinal));
        return array.toString();
    }


}