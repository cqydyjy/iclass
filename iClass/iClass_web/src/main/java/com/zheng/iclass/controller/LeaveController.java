package com.zheng.iclass.controller;

import com.zheng.iclass.biz.LeaveBiz;
import com.zheng.iclass.entity.Leave;
import com.zheng.iclass.entity.Student;
import com.zheng.iclass.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

//学生端提交
@Controller("leaveController")
@RequestMapping("/leave")
public class LeaveController {
    @Autowired
    private LeaveBiz leaveBiz;
    @RequestMapping("/commit")
    @ResponseBody
    public Leave commit(@RequestParam String cause,@RequestParam String item,@RequestParam String Sid){
        //Student student=(Student)session.getAttribute("student");
        System.out.println(item);
        Leave leave=new Leave();
        leave.setStatus("未批准");
        leave.setCreateTime(new Date());
        if(item.equals("0")){
            leave.setItem("病假");
            System.out.println("ewaf");
        }
        else leave.setItem("事假");
        leave.setCreateSid(Sid);
        leave.setNextDealTid("10003");
        leave.setCause(cause);
        leaveBiz.add(leave);
        return leave;

    }
//老师端接受
    @RequestMapping("/receive")
    @ResponseBody
    public List<Leave> receive(@RequestParam String tid){
        //Teacher teacher=(Teacher) session.getAttribute("teacher");
        List<Leave> list=leaveBiz.getByTid(tid);
        System.out.println(list);
        return list;
    }
    @RequestMapping("/deal")
    @ResponseBody
    public Leave deal(@RequestParam String id){
        int i=Integer.parseInt(id);
        Leave leave=leaveBiz.get(i);
        leave.setStatus("已批准");
        leaveBiz.edit(leave);
        return leave;
    }
}
