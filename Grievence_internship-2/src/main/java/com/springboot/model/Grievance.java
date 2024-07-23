package com.springboot.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@SuppressWarnings("serial")
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Grievance implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 public Long id;
	public String firstName;
	public String middleName;
	public String lastName;
	public String dob;
	public String gender;
	public String occupation;
	public String address;
	public String state;
	public String city;
	public String district;
	public String taluka;
	public String village;
	public String api_pincode;
	public String mobile;
	public String email;
	public String grievanceDistrict;
	public String grievanceTaluka;
	public String grievanceVillage;
	public String department;
	public String grievanceDetails;
	public String document;
	public String captchaAnswer;

}
