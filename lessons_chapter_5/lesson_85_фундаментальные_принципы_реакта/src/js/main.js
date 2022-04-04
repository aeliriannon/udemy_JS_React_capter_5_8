'use strict';

//Императивное программирование — это описание того, как ты делаешь что-то
//Декларативное программирование — это описание того, что ты делаешь

// Императивный подход (как): Я вижу, что тот угловой столик свободен. Мы пойдём туда и сядем там.
// Декларативный подход (что): Столик для двоих, пожалуйста.

//=== Особенности React ===

// 1. Использует препроцессор JSX - смесь html и js
// 2. Отслеживает, какая часть реакта обновилась(какие компоненты) и обновляет только их, а не все приложение вместе
// 3. Технология virtual DOM - облегченная копия, в которой работаем, а затем изменения переносятся в реальное DOM дерево