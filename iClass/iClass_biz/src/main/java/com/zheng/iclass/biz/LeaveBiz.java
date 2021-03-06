package com.zheng.iclass.biz;

import com.zheng.iclass.entity.Leave;

import java.util.List;

public interface LeaveBiz {
    void add(Leave leave);
    void edit(Leave leave);
    void remove(Integer id);
    void submit(Integer id);
    Leave get(Integer id);
    List<Leave> getByTid(String tid);
    List<Leave> getAll();
}
