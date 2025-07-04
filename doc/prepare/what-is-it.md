# 什么是bmcu

BMCU是AMCU的下一代项目，是兼容于AMS lite的第三方开源自动换料系统，BMCU体积小巧，成本低廉，完全开源。

他的稳定性不如AMS lite，以及作为第三方配件，后续可能会由于官方更新固件而无法使用

::: info 以下内容来自立创开源硬件平台的[BMCU](https://oshwhub.com/bamboo-shoot-xmcu-pcb-team/bmcu)描述
BMCU是根据开源资料设计的，根据Github上相关于bambubus的协议介绍，以及网友提供的参考数据，于是我们设计出了一个模拟AMS运行的系统，适用于A系列打印机。BMCU是在AMCU上特化而来，许多设计参考了网上能查到的AMS lite的工作原理。

因为其设计使用了许多开源内容，并且其功能和AMS lite过于相似，因此，BMCU是开源且不允许商业化的，仅供个人DIY学习使用。
:::

BMCU通过模拟bambu bus通讯协议、模拟ams lite和ams的运行逻辑，实现与打印机联动换色

项目使用ch32v203c8t6作为主控芯片，用75176芯片将bambu bus的rs485总线信号转换为ttl电平供单片机使用，进而实现通讯模拟。

## 关于该网站

该网站是由`@丸子`运维，由大家共同贡献的bmcu百科站，与拓竹官方没有任何关系

如果该网站对您有所帮助，欢迎前往赞助页面向我[打赏](/doc/other/donate)，您的支持将使该网站得以获得更好的资源，为您提供更好的体验！
