import {useEffect, useState} from 'react';
import {loadAlarmMedicineAction}from '@/features/alarm/actions/loadAlarmMedicineAction';
import {AlarmMedicine} from "@/features/alarm/models/AlarmMedicine";

export const useAlarmMedicine = () => {
    const [alarms, setAlarms] = useState<AlarmMedicine[]>([]);
    useEffect(()=>{
        loadAlarmMedicineAction().then(setAlarms)
    },[])

    return {
        alarms
    }
}