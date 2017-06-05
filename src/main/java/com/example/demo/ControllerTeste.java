package com.example.demo;

import jdk.nashorn.internal.parser.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by claudinei on 05/06/17.
 */
@Controller
@RequestMapping("/rest")
public class ControllerTeste {

    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = "text/plain")
    @ResponseBody
    public String branchBound(@RequestBody String search) {
        System.out.println(search);
        JSONArray array = new JSONArray();
        JSONObject jsonObj = new JSONObject("{teste: teste2}");
        System.out.println(jsonObj);
        array.put(jsonObj);
        System.out.println(array);
        return array.toString();
    }


}