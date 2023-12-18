﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SistZP2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчетный лист.
    /// </summary>
    // *** Start programmer edit section *** (РасчетныйЛист CustomAttributes)

    // *** End programmer edit section *** (РасчетныйЛист CustomAttributes)
    [AutoAltered()]
    [Caption("Расчетный лист")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетныйЛистE", new string[] {
            "НомерДок as \'Номер документа\'",
            "ДатаНачПер as \'Дата начала периода\'",
            "ДатаОкончПер as \'Дата окончания периода\'",
            "ОбщаяСумма as \'Общая сумма\'",
            "Сотрудники as \'Сотрудник\'"})]
    [AssociatedDetailViewAttribute("РасчетныйЛистE", "БольнЛист", "БольнЛистE", false, "", "Больничный лист", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистE", "Отпуск", "ОтпускE", false, "", "Отпускной лист", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистE", "Премии", "ПремииE", false, "", "Премия", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистE", "УдержИВыч", "УдержИВычE", false, "", "Удержание и вычеты", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("РасчетныйЛистE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("РасчетныйЛистL", new string[] {
            "НомерДок as \'Номер документа\'",
            "ДатаНачПер as \'Дата начала периода\'",
            "ДатаОкончПер as \'Дата окончания периода\'",
            "ОбщаяСумма as \'Общая сумма\'",
            "Сотрудники as \'Сотрудник\'"})]
    [AssociatedDetailViewAttribute("РасчетныйЛистL", "БольнЛист", "БольнЛистE", false, "", "Больничный лист", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистL", "Отпуск", "ОтпускE", false, "", "Отпускной лист", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистL", "Премии", "ПремииE", false, "", "Премия", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("РасчетныйЛистL", "УдержИВыч", "УдержИВычE", false, "", "Удержание и вычеты", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("РасчетныйЛистL", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class РасчетныйЛист : ICSSoft.STORMNET.DataObject
    {
        
        private double fОбщаяСумма;
        
        private int fНомерДок;
        
        private System.DateTime fДатаНачПер;
        
        private System.DateTime fДатаОкончПер;
        
        private IIS.SistZP2.Сотрудники fСотрудники;
        
        private IIS.SistZP2.DetailArrayOfБольнЛист fБольнЛист;
        
        private IIS.SistZP2.DetailArrayOfОтпуск fОтпуск;
        
        private IIS.SistZP2.DetailArrayOfПремии fПремии;
        
        private IIS.SistZP2.DetailArrayOfУдержИВыч fУдержИВыч;
        
        // *** Start programmer edit section *** (РасчетныйЛист CustomMembers)

        // *** End programmer edit section *** (РасчетныйЛист CustomMembers)

        
        /// <summary>
        /// ДатаНачПер.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.ДатаНачПер CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.ДатаНачПер CustomAttributes)
        public virtual System.DateTime ДатаНачПер
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаНачПер Get start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаНачПер Get start)
                System.DateTime result = this.fДатаНачПер;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаНачПер Get end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаНачПер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаНачПер Set start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаНачПер Set start)
                this.fДатаНачПер = value;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаНачПер Set end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаНачПер Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончПер.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.ДатаОкончПер CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.ДатаОкончПер CustomAttributes)
        public virtual System.DateTime ДатаОкончПер
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаОкончПер Get start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаОкончПер Get start)
                System.DateTime result = this.fДатаОкончПер;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаОкончПер Get end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаОкончПер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаОкончПер Set start)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаОкончПер Set start)
                this.fДатаОкончПер = value;
                // *** Start programmer edit section *** (РасчетныйЛист.ДатаОкончПер Set end)

                // *** End programmer edit section *** (РасчетныйЛист.ДатаОкончПер Set end)
            }
        }
        
        /// <summary>
        /// НомерДок.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.НомерДок CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.НомерДок CustomAttributes)
        public virtual int НомерДок
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.НомерДок Get start)

                // *** End programmer edit section *** (РасчетныйЛист.НомерДок Get start)
                int result = this.fНомерДок;
                // *** Start programmer edit section *** (РасчетныйЛист.НомерДок Get end)

                // *** End programmer edit section *** (РасчетныйЛист.НомерДок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.НомерДок Set start)

                // *** End programmer edit section *** (РасчетныйЛист.НомерДок Set start)
                this.fНомерДок = value;
                // *** Start programmer edit section *** (РасчетныйЛист.НомерДок Set end)

                // *** End programmer edit section *** (РасчетныйЛист.НомерДок Set end)
            }
        }
        
        /// <summary>
        /// ОбщаяСумма.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.ОбщаяСумма CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.ОбщаяСумма CustomAttributes)
        public virtual double ОбщаяСумма
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ОбщаяСумма Get start)

                // *** End programmer edit section *** (РасчетныйЛист.ОбщаяСумма Get start)
                double result = this.fОбщаяСумма;
                // *** Start programmer edit section *** (РасчетныйЛист.ОбщаяСумма Get end)

                // *** End programmer edit section *** (РасчетныйЛист.ОбщаяСумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.ОбщаяСумма Set start)

                // *** End programmer edit section *** (РасчетныйЛист.ОбщаяСумма Set start)
                this.fОбщаяСумма = value;
                // *** Start programmer edit section *** (РасчетныйЛист.ОбщаяСумма Set end)

                // *** End programmer edit section *** (РасчетныйЛист.ОбщаяСумма Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.SistZP2.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Get start)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Get start)
                IIS.SistZP2.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Get end)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Set start)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (РасчетныйЛист.Сотрудники Set end)

                // *** End programmer edit section *** (РасчетныйЛист.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.БольнЛист CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.БольнЛист CustomAttributes)
        public virtual IIS.SistZP2.DetailArrayOfБольнЛист БольнЛист
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.БольнЛист Get start)

                // *** End programmer edit section *** (РасчетныйЛист.БольнЛист Get start)
                if ((this.fБольнЛист == null))
                {
                    this.fБольнЛист = new IIS.SistZP2.DetailArrayOfБольнЛист(this);
                }
                IIS.SistZP2.DetailArrayOfБольнЛист result = this.fБольнЛист;
                // *** Start programmer edit section *** (РасчетныйЛист.БольнЛист Get end)

                // *** End programmer edit section *** (РасчетныйЛист.БольнЛист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.БольнЛист Set start)

                // *** End programmer edit section *** (РасчетныйЛист.БольнЛист Set start)
                this.fБольнЛист = value;
                // *** Start programmer edit section *** (РасчетныйЛист.БольнЛист Set end)

                // *** End programmer edit section *** (РасчетныйЛист.БольнЛист Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.Отпуск CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Отпуск CustomAttributes)
        public virtual IIS.SistZP2.DetailArrayOfОтпуск Отпуск
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Отпуск Get start)

                // *** End programmer edit section *** (РасчетныйЛист.Отпуск Get start)
                if ((this.fОтпуск == null))
                {
                    this.fОтпуск = new IIS.SistZP2.DetailArrayOfОтпуск(this);
                }
                IIS.SistZP2.DetailArrayOfОтпуск result = this.fОтпуск;
                // *** Start programmer edit section *** (РасчетныйЛист.Отпуск Get end)

                // *** End programmer edit section *** (РасчетныйЛист.Отпуск Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Отпуск Set start)

                // *** End programmer edit section *** (РасчетныйЛист.Отпуск Set start)
                this.fОтпуск = value;
                // *** Start programmer edit section *** (РасчетныйЛист.Отпуск Set end)

                // *** End programmer edit section *** (РасчетныйЛист.Отпуск Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.Премии CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Премии CustomAttributes)
        public virtual IIS.SistZP2.DetailArrayOfПремии Премии
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Премии Get start)

                // *** End programmer edit section *** (РасчетныйЛист.Премии Get start)
                if ((this.fПремии == null))
                {
                    this.fПремии = new IIS.SistZP2.DetailArrayOfПремии(this);
                }
                IIS.SistZP2.DetailArrayOfПремии result = this.fПремии;
                // *** Start programmer edit section *** (РасчетныйЛист.Премии Get end)

                // *** End programmer edit section *** (РасчетныйЛист.Премии Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.Премии Set start)

                // *** End programmer edit section *** (РасчетныйЛист.Премии Set start)
                this.fПремии = value;
                // *** Start programmer edit section *** (РасчетныйЛист.Премии Set end)

                // *** End programmer edit section *** (РасчетныйЛист.Премии Set end)
            }
        }
        
        /// <summary>
        /// Расчетный лист.
        /// </summary>
        // *** Start programmer edit section *** (РасчетныйЛист.УдержИВыч CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.УдержИВыч CustomAttributes)
        public virtual IIS.SistZP2.DetailArrayOfУдержИВыч УдержИВыч
        {
            get
            {
                // *** Start programmer edit section *** (РасчетныйЛист.УдержИВыч Get start)

                // *** End programmer edit section *** (РасчетныйЛист.УдержИВыч Get start)
                if ((this.fУдержИВыч == null))
                {
                    this.fУдержИВыч = new IIS.SistZP2.DetailArrayOfУдержИВыч(this);
                }
                IIS.SistZP2.DetailArrayOfУдержИВыч result = this.fУдержИВыч;
                // *** Start programmer edit section *** (РасчетныйЛист.УдержИВыч Get end)

                // *** End programmer edit section *** (РасчетныйЛист.УдержИВыч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетныйЛист.УдержИВыч Set start)

                // *** End programmer edit section *** (РасчетныйЛист.УдержИВыч Set start)
                this.fУдержИВыч = value;
                // *** Start programmer edit section *** (РасчетныйЛист.УдержИВыч Set end)

                // *** End programmer edit section *** (РасчетныйЛист.УдержИВыч Set end)
            }
        }
        
        // *** Start programmer edit section *** (РасчетныйЛист.Отправить CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (РасчетныйЛист.Отправить method implementation)
            return;
            // *** End programmer edit section *** (РасчетныйЛист.Отправить method implementation)
        }
        
        // *** Start programmer edit section *** (РасчетныйЛист.Распечатать CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Распечатать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Распечатать()
        {
            // *** Start programmer edit section *** (РасчетныйЛист.Распечатать method implementation)
            return;
            // *** End programmer edit section *** (РасчетныйЛист.Распечатать method implementation)
        }
        
        // *** Start programmer edit section *** (РасчетныйЛист.Скачать CustomAttributes)

        // *** End programmer edit section *** (РасчетныйЛист.Скачать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Скачать()
        {
            // *** Start programmer edit section *** (РасчетныйЛист.Скачать method implementation)
            return;
            // *** End programmer edit section *** (РасчетныйЛист.Скачать method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетныйЛистE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетныйЛистE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетныйЛистE", typeof(IIS.SistZP2.РасчетныйЛист));
                }
            }
            
            /// <summary>
            /// "РасчетныйЛистL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетныйЛистL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетныйЛистL", typeof(IIS.SistZP2.РасчетныйЛист));
                }
            }
        }
    }
}
