﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace shopsyApi.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public int UserId { get; set; }

    public string FullName { get; set; }

    public string AddressLine1 { get; set; }

    public string AddressLine2 { get; set; }

    public string City { get; set; }

    public string State { get; set; }

    public string ZipCode { get; set; }

    public string Country { get; set; }

    public string PhoneNumber { get; set; }

    public bool? IsDefault { get; set; }

    public DateTime? CreatedAt { get; set; }
}