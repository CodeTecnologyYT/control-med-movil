import {useState} from "react";

export const useAlarmChecked = () => {
    const [isShow, setIsShow] = useState(false);
    const [checkedIds, setCheckedIds] = useState<string[]>([]);

    const toggleCheckedAlarm = (id: string) => {
        setCheckedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    }
    const toggleShowCheckAlarm = (id: string) => {
        setIsShow(prevShow => {
            const nextShow = !prevShow;
            if (nextShow) {
                _addAlarm(id)
            } else {
                _resetAlarms()
            }
            return nextShow;
        });
    }

    const hiddenCheckAlarm = () => {
        setIsShow(false);
        _resetAlarms();
    }

    const _resetAlarms = () => {
        setCheckedIds([]);
    }

    const _addAlarm = (id: string) => {
        setCheckedIds([id])
    }

    return {
        isShow,
        checkedIds,
        // Methods
        toggleCheckedAlarm,
        toggleShowCheckAlarm,
        hiddenCheckAlarm
    }

}