import React from 'react'
import { Presentation } from '@saitonakamura/presa'
import * as Slides from './slides'

export const App = () => (
  <Presentation name="Иван Тулуп: асинхронщина в JS">
    <Slides.TitleSlide name="Иван Тулуп: асинхронщина в JS" />
    <Slides.AboutMeSlide name="Обо мне" />
    <Slides.HaroldMemeSlide name="Кандидатура для Ивана Тулупа" />
    <Slides.DevIvanSlide name="Иван Тулуп и его карты" />
    <Slides.StackSlide name="Стек" />
    <Slides.SystemicCirculationSlide name="Большой круг кровообращения" />
    <Slides.LoupeDemoSlide name="Демо Филипа Робертса: loupe" />
    <Slides.BrowserPrioritiesSlide name="Приоритеты браузеров и очереди задач" />
    <Slides.NodeEventLoopSlide name="Event Loop в Node.js" />
    <Slides.TimersPhaseSlide name="Фаза таймеров" />
    <Slides.IOCallbacksPhaseSlide name="Фаза I/O колбэков" />
    <Slides.NothingToDoHereSlide name="Фаза idle/prepare" />
    <Slides.PollPhaseSlide name="Фаза poll" />
    <Slides.CheckPhaseSlide name="Фаза check" />
    <Slides.ClosePhaseSlide name="Фаза close callbacks" />
    <Slides.TasksSummarySlide name="Итоги по таскам" />
    <Slides.MicroTasksTitleSlide name="Микротаски" />
    <Slides.EventLoopWhatwgSlide name="Event Loop версия whatwg" />
    <Slides.MicrotaskSourcesSlide name="Источники микротасок" />
    <Slides.AllGonnaExecuteSlide name="Microtask checkpoint: выполняем всё" />
    <Slides.MicrotaskCheckpointSlide name="Как работает microtask checkpoint" />
    <Slides.MicrotaskStackExample1Slide name="Таски и микротаски: асинхронный пример" />
    <Slides.MicrotaskStackExampleSyncSlide name="Таски и микротаски: синхронный пример" />
    <Slides.MicrotaskStackAnimationsAsyncSlide name="Асинхронный пример: объяснение" />
    <Slides.MicrotaskStackAnimationsSyncSlide name="Синхронный пример: объяснение" />
    <Slides.MicrotasksNodeSlide name="Микротаски в Node.js" />
    <Slides.ProcessNextTickSlide name="process.nextTick: пример" />
    <Slides.ProcessNextTickFixedSlide name="process.nextTick: исправленная версия" />
    <Slides.AsyncAwaitSlide name="async / await" />
    <Slides.MicrotasksSummarySlide name="Итоги по микротаскам" />
    <Slides.MaterialsSlide name="Материалы для изучения" />
  </Presentation>
)
