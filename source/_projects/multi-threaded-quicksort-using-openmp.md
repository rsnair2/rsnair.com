---
layout: project
title:  Multi-threaded Quicksort using OpenMP
tags: C++, Parallel Programming, Algorithms
---
Created a parallel sorting algorithm that uses OpenMP to abstract away the
details of thread creation / management. The algorithm uses Quicksort with a
three way (less than, equal to, greater than) or two way (less than, greater
than) partition scheme that is adjusted dynamically depending on the number of
duplicate elements encountered. Insertion sort is used when the list breaks
down to a size below a certain threshold.