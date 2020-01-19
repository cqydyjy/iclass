package com.zheng.iclass.biz.Impl;

import com.zheng.iclass.biz.LeaveBiz;
import com.zheng.iclass.dao.LeaveDao;
import com.zheng.iclass.dao.StudentDao;
import com.zheng.iclass.dao.TeacherDao;
import com.zheng.iclass.entity.Leave;
import com.zheng.iclass.entity.Student;
import com.zheng.iclass.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("leaveBiz")
public class LeaveBizImpl implements LeaveBiz {
    @Autowired
    private LeaveDao leaveDao;
    @Autowired
    private StudentDao studentDao;
    @Autowired
    private TeacherDao teacherDao;
    public void add(Leave leave) {
        leaveDao.insert(leave);
    }

    public void edit(Leave leave) {
        leaveDao.update(leave);
    }

    public void remove(Integer id) {
        leaveDao.delete(id);
    }

    @Override
    public void submit(Integer id) {
        Leave leave=leaveDao.select(id);

        Student student=studentDao.select(leave.getCreateSid());
        Teacher teacher=teacherDao.select(leave.getNextDealTid());
        leave.setStatus("新创建");

    }

    public Leave get(Integer id) {
        return leaveDao.select(id);
    }

    @Override
    public List<Leave> getByTid(String tid) {
        return leaveDao.selectByTid(tid);
    }

    public List<Leave> getAll() {
        return leaveDao.selectAll();
    }
}
