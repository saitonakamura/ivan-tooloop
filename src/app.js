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
  </Presentation>
)
