var mergeInBetween = function(list1, a, b, list2) {
    let count = 0;
    let list = list1;

    let pre ,afterItem;
    while(list.next){
        if(count === a-1){
            pre = list;
        }else if(count === b){
            afterItem = list;
        }
        count++;
        list = list.next;
    }
    pre.next = list2;
    while(list2.next){
        list2 = list2.next;
    };
    list2.next = afterItem.next;
    return list1
};

// 链表的特点
