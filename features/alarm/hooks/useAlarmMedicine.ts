import {useEffect, useState} from 'react';
import {AlarmMedicine} from '@/features/alarm/models';
import {loadAlarmMedicineAction}from '@/features/alarm/actions/loadAlarmMedicineAction';

export const useAlarmMedicine = () => {
    const [alarms, setAlarms] = useState<AlarmMedicine[]>([]);
    useEffect(()=>{
        loadAlarmMedicineAction().then(setAlarms)
    },[])

    return {
        alarms
    }
}