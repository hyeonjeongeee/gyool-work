<template>
  <FullCalendar :options="calendarOptions" />
  <CalModal v-model="isOpen"/>
</template>
<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid'
import koLocale from '@fullcalendar/core/locales/ko'
import interactionPlugin from '@fullcalendar/interaction';
import CalModal from "@/component/CalModal.vue";
import {ref} from "vue";


const isOpen = ref(true);

const handleDateSelect = (selectInfo:any) => {
  let title = prompt('등록할 일정 명을 입력해주세요.')
  let calendarApi = selectInfo.view.calendar

  console.log(selectInfo);
  calendarApi.unselect() // clear date selection
  if (title) {
    calendarApi.addEvent({
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      // allDay: selectInfo.allDay,
    })
  }
}
const handleEventClick = (clickInfo:any) => {
  if (confirm(`'${clickInfo.event.title}' 일정을 삭제하시겠습니까?`)) {
    clickInfo.event.remove()
  }
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: '',
  },
  initialView: 'dayGridMonth',
  height:'100%',
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  locale: koLocale,
  dayCellContent: (arg : any) => {
    return { html: String(arg.date.getDate()) }
  },
  select: handleDateSelect,
  eventClick: handleEventClick,
  events:[
    {
      title: 'event 1' ,
      start:'2025-08-01',
      end:'2025-08-02',
      backgroundColor :'#ffd2d2',
      borderColor : '#ffd2d2',
      textColor:'#4a3d3d'
    }
  ]
}

</script>
<style scoped>

</style>