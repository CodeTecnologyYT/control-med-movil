import dataAlarmMedicine from '@/features/alarm/data/data.json';

export const loadAlarmMedicineAction = async () => {
    try {
        const {data} = dataAlarmMedicine;
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}