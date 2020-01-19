package com.zheng.iclass.biz.Impl;

import com.zheng.iclass.biz.GlobalBiz;
import com.zheng.iclass.dao.StudentDao;
import com.zheng.iclass.dao.TeacherDao;

import com.zheng.iclass.entity.Student;
import com.zheng.iclass.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Service("globalBiz")
public class GlobalBizImpl implements GlobalBiz {
    //注入service依赖
    @Autowired
    private StudentDao studentDao;
    @Autowired
    private TeacherDao teacherDao;


    @Override
    public Student loginS(String sid, String password) {
        Student student=studentDao.select(sid);
        if(student!=null&&student.getPassword().equals(password)) {
            return student;
        }
        return null;
    }

    @Override
    public Teacher loginT(String tid, String password) {
        Teacher teacher=teacherDao.select(tid);
        if(teacher!=null&&teacher.getPassword().equals(password)){
            return teacher;
        }
        return null;
    }
}


